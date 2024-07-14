'use client'
import { modalState } from "@/atom/modalAtom"
import { useRecoilState } from "recoil"
import Modal from "react-modal"
import { MdOutlineCameraAlt } from "react-icons/md";
import { useRef, useState } from "react";
import Image from "next/image";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "@/firebase";
import { useSession } from "next-auth/react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

function UploadModal() {
    const {data:session} = useSession()
    const [open,setOpen] = useRecoilState(modalState)
    const [selectedFile, setSelectedFile] = useState(null)
    const [loading, setLoading] = useState(false)

    async function uploadPost(){
        if(loading) return
        setLoading(true)
        const docRef = await addDoc(collection(db,'posts'),{
            caption:captionRef.current.value,
            username: session.user.username,
            profileImg: session.user.image,
            timestamp: serverTimestamp(),
        })
        const imageRef = ref(storage,`posts/${docRef.id}/image`)
        await uploadString(imageRef,selectedFile,'data_url').then(
            async(snapshot)=>{
                const downloadUrl = await getDownloadURL(imageRef);
                await updateDoc(doc(db,'posts',docRef.id),
                    {image: downloadUrl}
            )}
        )
        setOpen(false)
        setLoading(false)
        setSelectedFile(null)
    }

    function addImageToPost(e){
        const reader = new FileReader()
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
        
    }
    const captionRef = useRef(null)
    const filePickerRef = useRef(null)
    return (
        <div>
            
            {open && (
                <Modal
                className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 border-white rounded-md shadow-md"
                isOpen={open}
                onRequestClose={()=>{
                    setOpen(false); 
                    setSelectedFile(null);
                }}
                
                >
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        {selectedFile ? (
                            <Image
                            src={selectedFile} 
                            width={256} 
                            height={125}
                            alt="uploaded"
                            // className="w-full max-h-[250"
                            className="cursor-pointer max-h-250"
                            onClick={()=>setSelectedFile(null)}
                            />
                    ):( 
                    <MdOutlineCameraAlt 
                    onClick={()=>filePickerRef.current.click()} 
                    size={56} 
                    className="cursor-pointer bg-red-200 p-2 rounded-full border-2 text-red-500"/>)}
                       <input type="file" hidden ref={filePickerRef} onChange={addImageToPost}/>
                        <input ref={captionRef} type="text" maxLength="150" placeholder="Please enter your caption..." className="m-4 border-none text-center w-full focus:ring-0"/>
                        <button disabled={!selectedFile || loading} onClick={uploadPost} className="w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100">Upload post</button>

                    </div>
                </Modal>
            )}
            
        </div>
    )
}

export default UploadModal

'use client'
import { modalState } from "@/atom/modalAtom"
import { useRecoilState } from "recoil"
import Modal from "react-modal"

function UploadModal() {
    const [open,setOpen] = useRecoilState(modalState)
    return (
        <div>
            
            {open && (
                <Modal
                className="max-w-lg w-[90%] h-[300px] absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 border-white rounded-md shadow-md"
                isOpen={open}
                onRequestClose={()=>setOpen(false)}
                
                >
                    <div className="flex flex-col justify-center items-center h-[100%]">
                        <h2>Modal</h2>

                    </div>
                </Modal>
            )}
            
        </div>
    )
}

export default UploadModal

'use client'
import { modalState } from "@/atom/modalAtom"
import { useRecoilState } from "recoil"

function UploadModal() {
    const [open,setOpen] = useRecoilState(modalState)
    return (
        <div>
            <h2>Upload modal</h2>
            {open && <h2>Modal is open</h2>}
            
        </div>
    )
}

export default UploadModal

import { Html } from "@react-three/drei"

interface PopupProps {
  onClose: () => void
}

export default function Popup({ onClose }: PopupProps) {
  return (
    <Html center>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2">Project Details</h2>
        <p className="mb-4">This is where you can add details about your project.</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </Html>
  )
}
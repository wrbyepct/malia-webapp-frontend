
import { ReactMediaRecorder } from "react-media-recorder";

const recordBtn = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 transform scale-150"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
      />
    </svg>
  );


type Props = {
    handleStop: any 
    btnStyle: string
}

function Recorder({ handleStop, btnStyle }: Props) {


  return (
    <ReactMediaRecorder
          audio
          onStop={handleStop}
          render={({ status, startRecording, stopRecording }) => (
            <div>
              <button
                className={
                  btnStyle + " hover:text-rose-600 " + (status == "recording"
                    ? "animate-pulse-scale text-red-600"
                    : "text-gray-500")
                }
                
                onMouseDown={startRecording}
                onTouchStart={startRecording}
                onMouseUp={stopRecording}
                onTouchEnd={stopRecording}
              >
                {recordBtn}
              </button>
            </div>
          )}
        />
  )
}

export default Recorder
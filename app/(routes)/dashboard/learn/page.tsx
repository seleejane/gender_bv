import MicrophoneIcon from "@/components/icons/MicrophoneIcon";
import ActionButton from "@/components/mphalotsa/ActionButton";


export default function Learn(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-200 to-yellow-50 p-4">
        <ActionButton
            color="bg-blue-500"
            label={"Talk to\nMphalotsa"}
            ariaLabel="Talk to Mphalotsa"
            icon={<MicrophoneIcon />}
        />
    </div>
    );
}

import { UserButton } from "@clerk/nextjs"
import { Link } from "lucide-react"
import Image from "next/image"


export default function AppHeader(){
    const menuOptions = [
        {
         id: 1,
         name: 'Home',
         path: '/home'   
        },
        {
         id: 2,
         name: 'History',
         path: '/history'   
        },
        {
         id: 3,
         name: 'About',
         path: '/about'   
        }
    ]

    return(
        <div className="flex items-center justify-between px-40 py-5 shadow">
            <Image src={'/logo.svg'} alt="Home" width={120} height={90}/>
            <div className="hidden md:flex text-xl text-gray-400 gap-10">
                {menuOptions.map((option, index) => (
                    <div key={option.id}>
                        {option.name}
                    </div>
                ))}
            </div>
            <UserButton />
            
        </div>
    )
}
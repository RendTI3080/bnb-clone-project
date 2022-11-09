import Image from "next/image"

export default function LargeCard(props){
    return(
        <div>
            <div className="relative h-96 min-w-[300px]">
                <Image src={props.img} fill className="object-cover rounded-xl"/>
            </div>
            
            <div className="absolute top-8 lg:top-28 left-12">
                <h3 className="text-3xl md:text-4xl mb-3 w-64 font-bold">{props.title}</h3>
                <p className="text-medium">{props.description}</p>
                <button className="px-4 py-2 text-white bg-gray-900 rounded-lg mt-5">{props.buttonText}</button>
            </div>
        </div>
    )
}
export default function SmallerContainer({children, className}){
    return(
        <div className={`max-w-[850px] mx-auto w-full ${className}`}>
            {children}
        </div>
    )
}
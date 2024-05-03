
const ListBar = (props) => {
    const {titleList, children} = props

  return (
     <div className="w-full flex flex-col gap-y-1">
     <h3 className="text-[16px] font-bold text-[#FFFFFF]  ">
       {titleList}
     </h3>
     {children}
   </div>
  )
}

export default ListBar

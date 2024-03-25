import DashboardSidebar from "./DashboardSidebar"
export default function Layout({children}){
    return(
        <div className="flex">
            <DashboardSidebar />
            <div className="flex-1 p-4 bg-gray-100">
                {children}
            </div>
        </div>
    )
}
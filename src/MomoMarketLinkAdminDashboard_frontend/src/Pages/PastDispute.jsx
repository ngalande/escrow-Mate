import React from "react"
import SideNav from "../Components/SideNav"
import ReslovedDisputesTable from "../Components/ReslovedDisputesTable"

export default function PastDispute() {
    return (
        <SideNav>
            <div>
                past disputes
            </div>
            <div>
                <ReslovedDisputesTable />
            </div>
        </SideNav>
    )
}
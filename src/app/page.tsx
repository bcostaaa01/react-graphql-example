import CardComponent from "@/app/components/Card";
import TableComponent from "@/app/components/Table";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <TableComponent></TableComponent>
            </div>
        </main>
    )
}

export default async function MenuDetails({params}:{params: Promise<{menu:string}>}) {
    const menuType = (await params).menu;
    return (
        <div>
            <h1> {menuType} details</h1>
        </div>
    );
}
export default async function Page({params}:{params: Promise<{slug:string}>}) {
   const slug = (await params).slug;
   if(slug?.length ===3){
    return (
        <div>
            <h1>Docs for concept {slug[0]}, feature {slug[1]} and sub-feature {slug[2]}</h1>
        </div>
    );
   }
  else if(slug?.length ===2){
    return (
        <div>
            <h1>Docs for concept {slug[0]} and feature {slug[1]}</h1>
        </div>
    );
   }
   else if(slug?.length ===1){
    return (
        <div>
            <h1>Docs for concept {slug[0]}</h1>
        </div>
    );
   }

    return (
        <div>
            <h1>Docs</h1>
        </div>
    );
}

// here we keep adding if statements to check the length of the slug
// depending on the length of the slug we return a different page
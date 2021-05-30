import Head from "next/head"
import Header from "../components/Header"
import { API_KEY, CONTEXT_KEY } from '../keys';
import Response from '../Response'
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

function Search({ results }) {
    // console.log(results)

    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{ router.query.term} - Google Search</title>
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" />
            </Head>
            
            <Header />
            
            <SearchResults results={results}/>

        </div>
    )
}

export default Search

export async function getServerSideProps(context){
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    const data = useDummyData ? Response: await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.React_App_API_KEY}&cx=${process.env.React_App_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(res => res.json())
    
    return {
        props: {
            results: data,
        }
    }
    
}

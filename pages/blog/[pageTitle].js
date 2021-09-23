//creating dynamic routing 
import {useRouter} from 'next/router';

const pageTitle = () => {
    const router = useRouter();
    const pageTitle = router.query.pageTitle;
    return (
        <>
            <h1>Blog on {pageTitle}</h1>
        </>
    )
}

export default pageTitle;

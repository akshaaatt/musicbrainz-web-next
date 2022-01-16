import { useEffect, useState } from "react";
import Image from 'next/image';

const Blog = () => {
    const [blogDetails,setBlogDetails] = useState([{}])

    const fetchBlogDetails = async () =>{
        let response = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/blog.metabrainz.org/posts/`)
        response = await response.json()
        const objectArray =[]
        for(let postIndex = 0;postIndex<=7; postIndex++ ){
            const object = {};
            object.id=response.posts[postIndex].ID
            object.title=response.posts[postIndex].title
            object.link=response.posts[postIndex].URL
            objectArray.push(object)
        }
        setBlogDetails(objectArray)
    }
    useEffect(()=>{
        fetchBlogDetails()
    },[])

    return(
        <div className="card">
            <Image className="card-img-top" src="/assets/img/blogs.svg" width="128" height="48" alt="Blogs Logo"/>
            <div className="card-body">
                <h5 className="card-title text-center"><span className=" color-purple">News</span> & <span className="color-orange">Updates</span></h5>
            </div>
            <ul className="list-group list-group-flush">
                {blogDetails.map(post =>
                    <li key={post.id} className={"list-group-item"}><a href={post.link} target="_blank" rel="noopener noreferrer" className="card-link">{post.title}</a></li>
                )}

            </ul>
            <div className="card-body align-items-center d-flex justify-content-center">
                <a href="https://twitter.com/MusicBrainz" target="_blank" rel="noopener noreferrer" className="card-link"> <i className="fab fa-twitter"/></a>
                <a href="https://blog.metabrainz.org" className="card-link" target="_blank" rel="noopener noreferrer"> <i className="bi bi-rss-fill"/></a>
                <a href="https://community.metabrainz.org" className="card-link" target="_blank" rel="noopener noreferrer">Community Forum</a>
            </div>
        </div>
    )
}

export default Blog;

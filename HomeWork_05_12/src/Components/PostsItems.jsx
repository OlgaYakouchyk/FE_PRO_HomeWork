
function PostItem(props){
    const {title, description, author} = props
    return(
        <div className="dataPosts">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{author}</p>
        </div>
    )

}
export default PostItem
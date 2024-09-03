interface PostData{
    id:string,
    idUserCreate:string,
    urlAvatar:string,
    content:string,
    contentUrl:string,
    isLike:boolean,
    amountLike:number,
    amountComment:number,
    timeCreate:Date
}
export default PostData;
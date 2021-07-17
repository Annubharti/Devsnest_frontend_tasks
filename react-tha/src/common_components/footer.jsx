

const commonFooterStyle = {
    fontSize: "24px",
    textAlign: "center",
    position: "fixed",
    bottom:"0",
    left: "0",
    width: "100%",
    height: "60px",
    backgroundColor: "#D0DAEE",
    paddingTop: "10px"

}

const CommonFooter = () =>{
    return (
        <div className="common_footer" style={commonFooterStyle}><a href="./"> Back to Home Page </a></div>
    )
}

export default CommonFooter
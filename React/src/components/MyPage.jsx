// import React from "react";

const MyPage = () => {
    let name = 'Denzyl';
    let age = 17;


    return (
        <>
        <h1>Aptech Port Harcourt</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum eum, modi dignissimos libero asperiores beatae. Porro qui, tempora veniam quam ipsam minus. Eaque beatae earum illo at inventore corrupti?</p>
        <p>My age is {age} </p>
        {name && <h2>Hello {name}</h2>}
        </>
    );
}

export default MyPage;
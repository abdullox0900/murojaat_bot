import React, { useEffect, useState } from "react";
import { Select, InputNumber, Mentions, Input, Button } from 'antd';
import Swal from 'sweetalert2';
import Container from "../Container/Container";

import "./Form.scss"

function Form() {

    const [data, setData] = useState([])
    const [curs, setCurs] = useState('');
    const [user, setUserName] = useState('');
    const [tel, setTel] = useState('');
    const [comment, setComment] = useState('');

    const handleChange = (value) => {
        setCurs(value)
    };

    const onChange = (e) => {
        setTel(e.target.value);
    };

    // useEffect(() => {
    //     fetch("https://eduapp.uz/api/courses")
    //         .then((res) => res.json())
    //         .then((data) => setData(data))
    // }, [])

    // var myHeaders = new Headers();
    // myHeaders.append("Accept", "application/json");

    // function onSubmit(e) {
    //     e.preventDefault()

    //     var formdata = new FormData();
    //     formdata.append("name", user);
    //     formdata.append("phone", tel);
    //     formdata.append("course_id", curs);
    //     formdata.append("address", comment);

    //     var requestOptions = {
    //         method: 'POST',
    //         body: formdata,
    //         headers: myHeaders,
    //         redirect: 'follow'
    //     };

    //     if (tel == '' || user == '' || comment == '') {
    //         Swal.fire(
    //             `Ma'lumot Toldrin`,
    //         )
    //     } else {
    //         fetch('https://eduapp.uz/api/appeals', requestOptions)
    //             .then(response => {
    //                 console.log(response);
    //                 if (response.ok) {
    //                     Swal.fire({
    //                         icon: 'success',
    //                         title: `Ma'lumot jonatildi tez orada sizblan bog'lanamiz`,
    //                         showConfirmButton: false,
    //                         timer: 10000,
    //                     })
    //                     setComment('')
    //                     setUserName('')
    //                     setTel('')
    //                 }else {
    //                     Swal.fire({
    //                         icon: 'error',
    //                         title: 'Xatolik Yuzberdi',
    //                     })
    //                 }
    //             })
    //             .catch(error => Swal.fire({
    //                 icon: 'error',
    //                 title: 'Xatolik Yuzberdi',
    //             }));
    //     }
    // }

    return (
        <Container>
            <section className="curs-form">
                <img className="curs-form__img" src="https://thumbs.gfycat.com/SeveralConsciousFairybluebird-max-1mb.gif" alt="" />

                <form className="curs-form__form">
                    <Select
                        defaultValue="Tuman"
                        style={{ width: '100%', marginBottom: '15px',}}
                        onChange={handleChange}
                        // options={
                        //     data?.map((item) => {
                        //         return (
                        //             {
                        //                 value: item?.id,
                        //                 label: item?.name,
                        //             }
                        //         )
                        //     })
                        // }
                    />
                    <Input placeholder="Ism Sharf" style={{ width: '100%', marginBottom: '15px', padding: '8px 10px'}} value={user} onChange={(e) => setUserName(e.target.value)} />
                    <Input placeholder="Telfon nomer" style={{ width: '100%', marginBottom: '15px', padding: '8px 10px'}} value={tel} onChange={onChange} />
                    <Input placeholder="Email" style={{ width: '100%', marginBottom: '15px', padding: '8px 10px'}} value={tel} onChange={onChange} />
                    <textarea className="form-curs__textarea" cols="20" rows="7" placeholder="Manzil" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>

                    <div className="curs-form__sub-btn">
                        <button className="curs-form__btn">Jonatish</button>
                    </div>
                </form>
            </section>
        </Container>
    )
}

export default Form
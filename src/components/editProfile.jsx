import React from "react";
import {
  Tab,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Alert,
} from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import { fetchUpdateMe, selectIsAuth } from "../redux/slices/auth.js";

const EditProfile = () => {

    const dispatch = useDispatch();

    const isAuth = useSelector(selectIsAuth);
  
    const [phone, setPhone] = React.useState("+7");
    const [father_phone, setFPhone] = React.useState("+7");
    const [mother_phone, setMPhone] = React.useState("+7");
  
    const [errorMessage, setErrorMessage] = React.useState("");
  
    const [matchedPass, setMatchedPass] = React.useState(true);
  
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors, isValid },
    } = useForm({
      defaultValues: {
        lastname: "",
        firstname: "",
        patronymic: "",
        address: "",
        birthday: "",
        father_lname: "",
        father_fname: "",
        father_patron: "",
        mother_lname: "",
        mother_fname: "",
        mother_patron: ""
      },
      mode: "onChange",
    });
  
    const onSubmit = async (values) => {
        const data = await dispatch(
            fetchUpdateMe({
            lastname: values.lastname,
            firstname: values.firstname,
            patronymic: values.patronymic,
            phone: phone && phone,
            address: values.address,
            birthday: values.class,
            father_lname: values.father_lname,
            father_fname: values.father_fname,
            father_patron: values.father_patron,
            father_phone: father_phone && father_phone,
            mother_lname: values.mother_lname,
            mother_fname: values.mother_fname,
            mother_patron: values.mother_patron,
            mother_phone: mother_phone && mother_phone
          })
        );
  
        setErrorMessage(data.payload.message);
  
        if ("token" in data.payload) {
          window.localStorage.setItem("token", data.payload.token);
        }
      }

      return (<>Edit profile</>)
    };

    

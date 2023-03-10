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

import { fetchRegisterStudent, selectIsAuth } from "../redux/slices/user.js";

const Registration = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsAuth);

  const [phone, setPhone] = React.useState("+7");

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
      email: "",
      address: "",
      password: "",
      confirmPass: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    if (values.password === values.confirmPass) {
      const data = await dispatch(
        fetchRegisterStudent({
          lastname: values.lastname,
          firstname: values.firstname,
          patronymic: values.patronymic,
          email: values.email,
          phoneNumber: phone && phone,
          address: values.address,
          password: values.password,
        })
      );

      setErrorMessage(data.payload.message);

      if ("token" in data.payload) {
        window.localStorage.setItem("token", data.payload.token);
      }
    } else {
      setMatchedPass(false);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Container fluid>
      <Row>
        <Col
          className="col-lg-4 col-xs-12 d-flex align-items-center justify-content-center registration-img-card"
          style={{ padding: "0" }}
        ></Col>
        <Col className="col-lg-8 col-xs-12 d-flex row static-card-col align-items-center justify-content-start">
          <div>
            <h1 style={{ color: "#00509d" }}>??????????????????????</h1>
            <br />
            {errorMessage && errorMessage && (
              <Alert
                variant={errorMessage && errorMessage ? "danger" : "primary"}
                style={
                  errorMessage && errorMessage
                    ? { borderColor: "red" }
                    : { borderRadius: "6px" }
                }
              >
                {
                  <div className="text-center" style={{ margin: "-12px" }}>
                    {errorMessage && <span>{errorMessage}</span>}
                  </div>
                }
              </Alert>
            )}

            <Card className="static-card">
              <Form onSubmit={handleSubmit(onSubmit)} method="post">
                <Row>
                  <h4>???????? ??????????????</h4>
                  <Col lg={4} xs={12}>
                    <Form.Group className="mb-3">
                      {errors && errors.lastname ? (
                        <Form.Label style={{ color: "red" }}>
                          {errors.lastname?.message}
                        </Form.Label>
                      ) : (
                        <Form.Label>????????????????????</Form.Label>
                      )}
                      <Form.Control
                        style={
                          Boolean(errors.lastname?.message)
                            ? {
                                borderColor: "red",
                              }
                            : { borderColor: "#80a8ce" }
                        }
                        className="form-control-input"
                        {...register("lastname", {
                          required: "???????????????????????? ??????????????????",
                          minLength: {
                            value: 3,
                            message:
                              "???????????? 3 ???????? 16 ???????????? ???????????????? ?????????? ??????????",
                          },
                          maxLength: {
                            value: 16,
                            message:
                              "???????????? 3 ???????? 16 ???????????? ???????????????? ?????????? ??????????",
                          },
                        })}
                        type="text"
                        placeholder=""
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} xs={12}>
                    <Form.Group className="mb-3">
                      {errors && errors.firstname ? (
                        <Form.Label style={{ color: "red" }}>
                          {errors.firstname?.message}
                        </Form.Label>
                      ) : (
                        <Form.Label>????????????</Form.Label>
                      )}

                      <Form.Control
                        style={
                          Boolean(errors.firstname?.message)
                            ? {
                                borderColor: "red",
                              }
                            : { borderColor: "#80a8ce" }
                        }
                        className="form-control-input"
                        {...register("firstname", {
                          required: "???????????????? ??????????????????",
                          minLength: {
                            value: 3,
                            message:
                              "???????????? 3 ???????? 16 ???????????? ???????????????? ?????????? ??????????",
                          },
                          maxLength: {
                            value: 16,
                            message:
                              "???????????? 3 ???????? 16 ???????????? ???????????????? ?????????? ??????????",
                          },
                        })}
                        type="text"
                        placeholder=""
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} xs={12}>
                    <Form.Group className="mb-3">
                      {errors && errors.patronymic ? (
                        <Form.Label style={{ color: "red" }}>
                          {errors.patronymic?.message}
                        </Form.Label>
                      ) : (
                        <Form.Label>?????????????????? ??????</Form.Label>
                      )}

                      <Form.Control
                        style={
                          Boolean(errors.patronymic?.message)
                            ? {
                                borderColor: "red",
                              }
                            : { borderColor: "#80a8ce" }
                        }
                        className="form-control-input"
                        {...register("patronymic", {
                          required: "?????????????????? ???????? ??????????????????",
                          minLength: {
                            value: 3,
                            message:
                              "???????????? 3 ???????? 16 ???????????? ???????????????? ?????????? ??????????",
                          },
                          maxLength: {
                            value: 16,
                            message:
                              "???????????? 3 ???????? 16 ???????????? ???????????????? ?????????? ??????????",
                          },
                        })}
                        type="text"
                        placeholder=""
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <h4>???????????????? ????????????????</h4>
                  <Col lg={4} xs={12}>
                    <Form.Group className="mb-3">
                      {errors && errors.email ? (
                        <Form.Label style={{ color: "red" }}>
                          {errors.email?.message}
                        </Form.Label>
                      ) : (
                        <Form.Label>??????????</Form.Label>
                      )}

                      <Form.Control
                        style={
                          Boolean(errors.email?.message)
                            ? {
                                borderColor: "red",
                              }
                            : { borderColor: "#80a8ce" }
                        }
                        className="form-control-input"
                        {...register("email", {
                          required: "???????????????????? ??????????????????",
                          pattern: {
                            value:
                              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "?????????? ???????????????? ??????????????????",
                          },
                        })}
                        type="email"
                        placeholder=""
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} xs={12}>
                    <Form.Group className="mb-3">
                      {!phone ? (
                        <Form.Label style={{ color: "red" }}>
                          ?????????????????? ??????????????????
                        </Form.Label>
                      ) : (
                        <Form.Label>??????????????</Form.Label>
                      )}

                      <PhoneInput
                        style={
                          !phone
                            ? {
                                borderColor: "red",
                              }
                            : { borderColor: "#80a8ce" }
                        }
                        className="form-control phone"
                        defaultCountry="KZ"
                        value={phone}
                        onChange={setPhone}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} xs={12}>
                    <Form.Group className="mb-3">
                      {errors && errors.address ? (
                        <Form.Label style={{ color: "red" }}>
                          {errors.address?.message}
                        </Form.Label>
                      ) : (
                        <Form.Label>????????????????</Form.Label>
                      )}

                      <Form.Control
                        style={
                          Boolean(errors.address?.message)
                            ? {
                                borderColor: "red",
                              }
                            : { borderColor: "#80a8ce" }
                        }
                        className="form-control-input"
                        {...register("address", {
                          required: "???????????????????? ??????????????????",
                          minLength: {
                            value: 3,
                            message: "???????????????? ?????????? ?????? ??????????",
                          },
                        })}
                        type="text"
                        placeholder=""
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} xs={12}>
                    <Form.Group className="mb-3">
                      {errors && errors.password ? (
                        <Form.Label style={{ color: "red" }}>
                          {errors.password?.message}
                        </Form.Label>
                      ) : (
                        <Form.Label>?????????? ??????</Form.Label>
                      )}

                      <Form.Control
                        className="form-control-input"
                        style={
                          Boolean(errors.password?.message)
                            ? {
                                borderColor: "red",
                              }
                            : { borderColor: "#80a8ce" }
                        }
                        {...register("password", {
                          required: "?????????? ?????????? ??????????????????",
                          minLength: {
                            value: 6,
                            message:
                              "?????????? ?????? 6 ???????? 16 ???????????? ???????????????? ?????????? ??????????",
                          },
                          maxLength: {
                            value: 16,
                            message:
                              "???????????? 6 ???????? 16 ???????????? ???????????????? ?????????? ??????????",
                          },
                        })}
                        type="password"
                        placeholder=""
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} xs={12}>
                    <Form.Group className="mb-3">
                      {errors && errors.confirmPass ? (
                        <Form.Label style={{ color: "red" }}>
                          {errors.confirmPass?.message}
                        </Form.Label>
                      ) : (
                        <Form.Label>?????????? ?????????? ????????????????????</Form.Label>
                      )}

                      <Form.Control
                        className="form-control-input"
                        style={
                          Boolean(errors.confirmPass?.message)
                            ? {
                                borderColor: "red",
                              }
                            : { borderColor: "#80a8ce" }
                        }
                        {...register("confirmPass", {
                          required: "?????????? ?????????? ?????????? ??????????????????",
                          validate: (val) => {
                            if (watch("password") !== val) {
                              return "?????????? ???????????? ???????????? ????????????????";
                            }
                          },
                        })}
                        type="password"
                        placeholder=""
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Col className="col-12 d-flex column justify-content-end align-items-center">
                  <Link to="/for-student/login">
                    <Button variant="primary" className="btn outlined-btn">
                      ???????? ??????????????????
                    </Button>
                  </Link>

                  <Button
                    variant="primary"
                    className="btn-signup"
                    type="submit"
                  >
                    ??????????????
                  </Button>
                </Col>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;

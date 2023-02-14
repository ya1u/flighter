import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Coupang from "../components/Coupang";
import Agreement1 from "../components/Agreement1";
import Agreement2 from "../components/Agreement2";
import Weather from "../components/Weather";
import { useCallback, useEffect, useState } from "react";

const StyleWrap = styled.div`
  .weather_list {
    margin-top: 90px;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 100px;

    .blue {
      color: red;
    }
    .gray {
      color: gray;
    }

    .title {
      color: var(--color-r-m);
      font-family: var(--font-bd);
      font-size: 36px;
    }

    .title-1 {
      margin-bottom: 20px;
      color: var(--color-r-g);
    }

    .content {
      table {
        margin: auto;

        .error {
          color: red;
        }
        .success {
          color: skyblue;
        }

        th {
          text-align: left;
        }

        td {
          height: 60px;
          display: flex;
          flex-direction: column;

          span {
            text-align: left;
            padding-left: 15px;
            padding-top: 3px;
          }
        }

        input {
          background-color: var(--color-l-g);
          border: none;
          width: 250px;
          margin-left: 10px;
          border-radius: 10px;
          padding-left: 10px;
          height: 40px;
          outline: none;
        }

        .input_small {
          margin-right: 5px;
        }

        .input_id {
          width: 181px;
        }

        .input_mail {
          width: 207px;
        }

        .input_btn {
          width: 55px;
          height: 35px;
          border-radius: 10px;
          background-color: skyblue;
          color: white;
          padding: 7px;
        }

        input:hover,
        input:focus {
          caret-color: var(--color-d-m);
        }
      }
    }

    .btn-cancle {
      background-color: var(--color-r-g);
      border: none;
      margin-left: 10px;
    }

    .form_agreement {
      margin-top: 60px;

      .form_agreement_title {
        margin-bottom: 20px;
        font-size: 20px;
        float: left;
      }

      .form_agreement_item:first-child {
        margin-bottom: 30px;
      }

      .form_agreement_item {
        text-align: left;

        textarea {
          padding: 3px;
          line-height: 25px;
          resize: none;
        }

        input,
        label {
          margin-top: 5px;
          margin-bottom: 20px;
        }
      }

      .form_agreement_all {
        background-color: var(--color-l-g);
        line-height: 60px;
        height: 60px;
        border-radius: 15px;
        margin-bottom: 20px;
      }
    }

    @media (max-width: 780px) {
      textarea {
        width: 500px;
      }
    }

    @media (max-width: 560px) {
      textarea {
        width: 350px;
      }
      .form_agreement_all {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 1180px) {
    .weather_list {
      display: none;
    }
    .ad {
      display: none;
    }
  }
`;

const Join = (props: any) => {
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
      setMarketingCheck(true);
    } else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
      setMarketingCheck(false);
    }
  };

  const ageBtnEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
    } else {
      setAgeCheck(false);
    }
  };

  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };

  useEffect(() => {
    if (ageCheck === true && useCheck === true && marketingCheck === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [ageCheck, useCheck, marketingCheck]);

  // -------------------------------------------------------------------------------------------------- //

  //이름, 이메일, 비밀번호, 비밀번호 확인
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState<string>("");
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>("");

  // 유효성 검사
  const [isName, setIsName] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);
  
  // const onSubmit = useCallback(
  //   async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault()
  //     try {
  //       await axios
  //         .post(REGISTER_USERS_URL, {
  //           username: name,
  //           password: password,
  //           email: email,
  //         })
  //         .then((res) => {
  //           console.log('response:', res)
  //           if (res.status === 200) {
  //             router.push('/sign_up/profile_start')
  //           }
  //         })
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   },
  //   [email, name, password, router]
  // )

  // 이름
  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.')
      setIsName(false)
    } else {
      setNameMessage('올바른 이름 형식입니다')
      setIsName(true)
    }
  }, [])

  // 이메일
  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const emailCurrent = e.target.value
    setEmail(emailCurrent)

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식이 틀렸습니다')
      setIsEmail(false)
    } else {
      setEmailMessage('올바른 이메일 형식입니다')
      setIsEmail(true)
    }
  }, [])

  // 비밀번호
  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 8자리 이상')
      setIsPassword(false)
    } else {
      setPasswordMessage('안전한 비밀번호를 입력하셨습니다')
      setIsPassword(true)
    }
  }, [])

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value
      setPasswordConfirm(passwordConfirmCurrent)

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage('비밀번호를 똑같이 입력하셨습니다')
        setIsPasswordConfirm(true)
      } else {
        setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요')
        setIsPasswordConfirm(false)
      }
    },
    [password]
  )

  return (
    <StyleWrap>
      <Weather />
      <div className="container">
        <h1 className="title">FLIGHTER SIGNUP</h1>
        <br />
        <h1 className="title-1">
          플라이터의 항공권 예매와 특별한 혜택을 받으실 수 있습니다.
        </h1>
        <Coupang />
        <form className="content">
          {/* <img src={`${process.env.PUBLIC_URL}/images/ic-user-normal.png`} alt="" /> */}
          <table>
            <tbody>
              <tr>
                <th>
                  <label>이 &nbsp; 름</label>
                </th>
                <td>
                  <input type="text" placeholder="이름을 입력해주세요."  onChange={onChangeName} id="name"  />
                  {name.length > 0 && (
                    <span className={`message ${isName ? "success" : "error"}`}>
                      {nameMessage}
                    </span>
                  )}
                </td>
              </tr>
              <tr>
                <th>
                  <label>아이디</label>
                </th>
                <td>
                  <div>
                    <input className="input_small input_id" type="text" placeholder="아이디를 입력해주세요."/>
                    <Link className="input_btn" to="">
                      중복확인
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  <label>비밀번호</label>
                </th>
                <td className="position-relative">
                  <input 
                    type="password"
                    placeholder="숫자+영어+특수문자 8자리 이상"
                    onChange={onChangePassword}
                  />
                  {password.length > 0 && (
                    <span className={`${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>
                  )}
                </td>
              </tr>
              <tr>
                <th>
                  <label>비밀번호 확인</label>
                </th>
                <td>
                  <input
                    type="password"
                    placeholder="비밀번호를 한번 더 입력해주세요."
                    onChange={onChangePasswordConfirm}
                  />
                  {passwordConfirm.length > 0 && (
                    <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>
                  )}
                </td>
              </tr>
              <tr>
                <th>
                  <label>이메일</label>
                </th>
                <td>
                  <div>
                    <input
                      className="input_small input_mail"
                      type="email"
                      placeholder="이메일 입력해주세요"
                      onChange={onChangeEmail} 
                    />
                    <Link className="input_btn" to="">
                      인증
                    </Link>
                  </div>
                  {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="form_agreement">
            <label className="form_agreement_title">ㅁ 약관동의</label>
            <div className="form_agreement_box">
              <div className="form_agreement_item">
                <Agreement1 />
                <br />
                <input
                  type="checkbox"
                  id="check1"
                  checked={ageCheck}
                  onChange={ageBtnEvent}
                />
                <label htmlFor="check1">
                  &nbsp;위의 이용약관에 동의합니다.{" "}
                  <span className="blue">(필수)</span>
                </label>
              </div>
              <div className="form_agreement_item">
                <Agreement2 />
                <br />
                <input
                  type="checkbox"
                  id="check2"
                  checked={useCheck}
                  onChange={useBtnEvent}
                />
                <label htmlFor="check2">
                  &nbsp;위의 개인정보 수집 및 이용에 대한 안내에 동의합니다.{" "}
                  <span className="blue">(필수)</span>
                </label>
              </div>
              <div className="form_agreement_item">
                <input
                  type="checkbox"
                  id="check3"
                  checked={marketingCheck}
                  onChange={marketingBtnEvent}
                />
                <label htmlFor="check3">
                  &nbsp;마케팅 동의 <span className="gray">(선택)</span>
                </label>
              </div>
              <div className="form_agreement_all">
                <input
                  type="checkbox"
                  id="all-check"
                  checked={allCheck}
                  onChange={allBtnEvent}
                />
                <label htmlFor="all-check">
                  &nbsp;위의 이용약관 및 개인정보 수집 및 이용에 대한 안내에
                  동의합니다.
                </label>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            style={{
              backgroundColor: "var(--color-r-m)",
              border: "none",
              opacity: "0.8",
            }}
            variant="secondary"
            // disabled={!(isName && isEmail && isPassword && isPasswordConfirm)}
          >
            회원가입
          </Button>
          <Button className="btn-cancle" type="reset">
            <Link to="/login">취소</Link>
          </Button>
        </form>
      </div>
    </StyleWrap>
  );
};

export default Join;
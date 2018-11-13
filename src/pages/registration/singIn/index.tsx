import * as React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import SingInForm from '../../../container/singInForm/singInForm'

import './singInStyles.scss';

export default class SingIn extends React.Component {
    handleSubmit=async(value)=>{
        try {
            const response = await axios.post('', {
                email: value.email,
                password: value.password,
                confirmPassword: value.confirmPassword,
            });
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    public render(){
        return(
            <div className="sing-in-wrapper">
                <div className="sing-in-top">
                    <div className="sing-in-title">
                        Are you new user?
                    </div>
                    <SingInForm
                        onSubmit={this.handleSubmit}
                    />
                </div>
                <div className="sing-in-bottom">
                    <div className="sing-in-bottom-btns-wrapper">
                        <Button
                            variant="fab"
                            aria-label="Edit"
                            mini={true}
                            className="sing-in-btn-facebook"
                        >
                            <img
                                className="sing-in-bottom-btns-image"
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0i
                                aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCI
                                geT0iMHB4IgogICAgIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNi
                                IKICAgICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgICAgc3R5b
                                GU9ImZpbGw6IzRkYWRiYjsiPiAgICA8cGF0aCBkPSJNMTcu
                                NTI1LDlIMTRWN2MwLTEuMDMyLDAuMDg0LTEuNjgyLDEuNTY
                                zLTEuNjgyaDEuODY4di0zLjE4QzE2LjUyMiwyLjA0NCwxNS
                                42MDgsMS45OTgsMTQuNjkzLDIgQzExLjk4LDIsMTAsMy42N
                                TcsMTAsNi42OTlWOUg3djRsMy0wLjAwMVYyMmg0di05LjAw
                                M2wzLjA2Ni0wLjAwMUwxNy41MjUsOXoiPjwvcGF0aD48L3N
                                2Zz4="
                            />
                        </Button>
                        <Button
                            variant="fab"
                            aria-label="Edit"
                            mini={true}
                            className="sing-in-btn-google"
                        >
                            <img
                                className="sing-in-bottom-btns-image"
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0i
                                aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCI
                                geT0iMHB4IgogICAgIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNi
                                IKICAgICB2aWV3Qm94PSIwIDAgMjUyIDI1MiIKICAgICBzd
                                HlsZT0iZmlsbDojNGRhZGJiOyI+PGcgZmlsbD0ibm9uZSIg
                                ZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN
                                0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dH
                                QiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1ta
                                XRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBz
                                dHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5
                                vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im
                                5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4L
                                WJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMjUy
                                di0yNTJoMjUydjI1MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD4
                                8ZyBmaWxsPSIjNGRhZGJiIj48ZyBpZD0ic3VyZmFjZTEiPj
                                xwYXRoIGQ9Ik0xNzMuMDg1OTQsMTQxLjA1Mjc0Yy02LjA3M
                                DMxLC00LjE4MzYgLTIwLjY3MTg3LC0xMC43ODcxMSAtMjAu
                                MTc5NjksLTIxLjUzMzJjMC4yODcxMSwtNS43NDIxOSA0LjI
                                yNDYxLC0xMC4wNDg4NCA4LjUzMTI1LC0xNC4zNTU0N2MxMi
                                44Nzg5MSwtMTAuMDQ4ODMgMjYuMDAzOTEsLTIwLjA5NzY1I
                                DI2LjAwMzkxLC00My4wNjY0YzAsLTEzLjg2MzI5IC01LjI1
                                LC0yMy41MDE5NiAtMTAuOTUxMTcsLTMwLjU5NzY2aDEyLjU
                                wOTc2bDIxLC0yMWgtNzAuMDk1N2MtMTUuNzkxMDEsMCAtMz
                                YuOTk2MSwyLjcwNzA0IC01NC4yMjI2NiwxNy4wNjI1Yy0xM
                                i45MTk5MSwxMC4wNDg4MyAtMjAuMTc5NjksMjYuMDAzOTEg
                                LTIwLjE3OTY5LDQwLjM1OTM4YzAsMjQuNDA0MyAxOC44MjY
                                xNyw0OC41NjI1IDU0LjY3Mzg0LDQ3LjA4NTk0aDkuODg0Nz
                                ZjLTEuNDc2NTYsMi44NzExIC0yLjcwNzA0LDUuOTQ3MjYgL
                                TIuNzA3MDQsMTEuNjg5NDVjMCw4LjYxMzI5IDQuMjI0NjEs
                                MTQuNDM3NSA4LjUzMTI1LDIwLjE3OTY5Yy0xNC4zNTU0Niw
                                xLjQzNTU1IC00MC4wNzIyNiwyLjg3MTEgLTU4LjczNDM4LD
                                E0LjM1NTQ3Yy0xOC42NjIxLDExLjQ4NDM4IC0yNC42NTAzO
                                SwyNS43NTc4MSAtMjQuNjUwMzksMzcuMjQyMTljMCwyMS41
                                MzMyIDIxLjQxMDE2LDQzLjA2NjQgNjUuODcxMSw0My4wNjY
                                0YzUxLjYzODY2LDAgODAuNzE4NzUsLTI4LjcxMDk0IDgwLj
                                cxODc1LC01Ny40MjE4N2MwLC0yMS41MzMyIC0xMS43NzE0O
                                SwtMzMuMjYzNjYgLTI2LjAwMzkxLC00My4wNjY0ek0xMjku
                                NzczNDQsOTMuNjM4NjdjLTE4LjM3NSwwIC0yNi4wMDM5LC0
                                yMy4wOTE4IC0yNi4wMDM5LC0zNi42MjY5NWMwLC0xNi4xNj
                                AxNiAxMC4yNTM5LC0yMi4zOTQ1NCAxOS4zNTkzOCwtMjIuM
                                zk0NTRjMTcuNDMxNjQsMCAyNi4wMDM5LDIzLjI1NTg2IDI2
                                LjAwMzksMzguNzE4NzVjMCwxNy4zOTA2MyAtMTIuMzA0Njk
                                sMjAuMzAyNzQgLTE5LjM1OTM3LDIwLjMwMjc0ek0xMzMuNT
                                A1ODYsMjE4LjYxMzI5Yy0yNi44NjUyNCwwIC00NC4xNzM4M
                                ywtMTEuODk0NTQgLTQ0LjE3MzgzLC0yOC4yMTg3NWMwLC0x
                                Ni4zMjQyMiAxNC45NzA3LC0yMS42MTUyNCAyMC43OTQ5MSw
                                tMjMuNzg5MDZjMTAuNTQxMDIsLTMuMjQwMjQgMzMuOTYwOT
                                QsLTMuNDA0MyAzMy45NjA5NCwtMy40MDQzYzE4LjY2MjExL
                                DExLjk3NjU2IDI2Ljk4ODI5LDE4LjYyMTA5IDI2Ljk4ODI5
                                LDMwLjU5NzY1YzAsMTQuMTUwNCAtMTMuMDgzOTksMjQuODE
                                0NDYgLTM3LjU3MDMxLDI0LjgxNDQ2eiI+PC9wYXRoPjwvZz
                                48L2c+PGcgZmlsbD0iIzRkYWRiYiI+PHBhdGggZD0iTTIxN
                                i4xNzUsNzAuNDE1djM3LjM2aDM1LjY4djE1LjM4aC0zNS42
                                OHY0MC40M2gtMTYuMzV2LTQwLjQzaC0zNS42OHYtMTUuMzh
                                oMzUuNjh2LTM3LjM2eiI+PC9wYXRoPjwvZz48L2c+PC9zdm
                                c+"
                            />
                        </Button>
                    </div>
                    <h3 className="sing-in-bottom-text">
                        Sing Up it's free
                    </h3>
                </div>
            </div>
        );
    }
}



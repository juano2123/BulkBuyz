import React from "react";
import { Input } from "antd";
import "../styles/MensajeCliente.css";

const { Search } = Input;

const onSearch = (value) => console.log(value);

export const MensajeC = () => {
  return (
    <div className="MensajeC">
      <div className="container">
        <div className="sidebar">
          <div className="navbar">
            <span className="logo"> Mensajes</span>
            <div className="user">
              <div className="imagen1">
                <img
                  className="img-ref-espe"
                  src="https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393645.jpg"
                  alt=""
                />
              </div>
              <span>John Martinez</span>
            </div>
          </div>

          <div className="search">
            <div className="searchForm">
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
              />
            </div>

            <div className="userChat">
              <div className="imagen2">
                <img
                  src="https://media.sgff.io/sgff_r1eHetbDYb/2022-10-12/1665610777549/The_state_of_women_1_320x286.png"
                  alt=""
                />
              </div>

              <div className="userChatInfo">
                <span>Jane</span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat"></div> chat
      </div>
    </div>
  );
};
export default MensajeC;

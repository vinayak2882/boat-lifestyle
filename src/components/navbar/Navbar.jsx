import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import {useHistory} from "react-router";
// import useHistory from "react-router";

// importing Custom sub-Components
import { Collection, SearchResults } from "./NavbarHover";

// importing assets
import logo from "../../images/boat-logo.svg";
import downArrowIcon from "../../images/down-arrow-icon.svg";
import searchIcon from "../../images/search-icon.svg";
import couponIcon from "../../images/coupon-icon.svg";
import avatarIcon from "../../images/avatar-icon.svg";
import cartIcon from "../../images/cart-icon.svg";
import { useEffect, useState } from "react";

const NavbarContainre = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 88px;
    /* background:var(--black); */
    /* color: var(--white); */
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 10;
background-color: black;
color: white;
border-bottom: 1px solid white;
    span,
    img {
        cursor: pointer;
    }

    & > div:nth-child(1) {
        width: 216px;
    }

    & > div:nth-child(2) {
        width: 390px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > span:nth-child(1) {
            font-weight: 500;
            font-size: 16px;
        }

        > span:nth-child(3) {
            color: ${(props) => (props.flag ? "red" : "inherit")};
        }

        img {
            //down tick for shop and more
            margin-bottom: 2px;
        }

        > span {
            font-weight: 200;
            font-size: 15px;
            position: relative;
            transition: all 0.2s ease;
        }

        > span:hover {
            color: red;
        }

        > span::after {
            content: "";
            position: absolute;
            height: 12px;
            width: 1px;
          background:red;
            top: 22%;
            right: -15px;
        }

        > span:nth-child(4)::after {
            display: none;
        }

        > span:nth-child(1) {
            /* transition: all 1s ease; */
        }
        > span:nth-child(1) .navbar-collection {
            position: fixed;
          background:black;
            width: 100%;
            height: 650px;
            visibility: hidden;
            opacity: 0;
            top: 0px;
            left: 0;
            border-top: 88px solid transparent;
            z-index: -10;
            transition: all 0.5s ease;
        }

        > span:nth-child(1):hover .navbar-collection {
            visibility: visible;
            opacity: 1;
            /* transition: all 0.5s ease; */
        }
    }

    & > div:nth-child(3) {
        width: 380px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        & img {
            margin-top: 3px;
        }
    }
`;

const SearchBox = styled.div`
    width: 235px;
    height: 36px;
    border-radius: 19px;
    background : var(--white);
    display: flex;
    align-items: center;
    padding: auto 18px;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1px;
    position: relative;
    border-radius: 25px;

    & img {
        margin-left: 18px;
        margin-right: 8px;
    }
    input {
        border: none;
    }

    input ~ .search-results {
        position: fixed;
        width: 235px;
        height: 230px;
        top: 60px;
        background: var(--black-gradient);
        visibility: hidden;
        opacity: 0;
        transition: all 0.2s ease 0.5s;
    }
    input:focus ~ .search-results {
        visibility: visible;
        opacity: 1;
    }
`;

const NavbarSpaceHolder = styled.div`
    height: 88px;
`;

export const Navbar = () => {
    const [flag, setFlag] = useState(false);
    const temp = useNavigate();

    useEffect(() => {
        if (temp.location === "/pages/sound-of-champions") {
            setFlag(true);
        } else {
            setFlag(false);
        }
    }, [temp.location]);
console.log("Vinu")
    return (
        <>
            <NavbarContainre flag={flag} >
                <div className="boat-logo" >
                    <Link to="/">
                        <img src={logo} alt="Logo"  />
                    </Link>
                </div>
                <div className="nav-links">
                    <span>
                        Shop <img src={downArrowIcon} alt="arrow-Icon" />
                        <Collection className="navbar-collection" />
                    </span>
                    <span>boAt | DC </span>
                    <span>
                        <Link to="/OfferZone">
                            Offer Zone
                        </Link>{" "}
                    </span>
                    <span>
                        More <img src={downArrowIcon} alt="arrow-Icon" />
                    </span>
                </div>
                <div>
                    <SearchBox>
                        <img src={searchIcon} alt="search" />
                        <input type="text" placeholder="Search..." />
                        <SearchResults />
                    </SearchBox>

                    <div>
                        <Link to="/coupon">
                            <img src={couponIcon} alt="couponIcon" />
                        </Link>
                    </div>
                    <div>
                        <Link to="/login">
                            <img src={avatarIcon} alt="avatarIcon" />
                        </Link>
                    </div>
                    <div>
                        <Link to="/cart">
                            <img src={cartIcon} alt="cartIcon" />
                        </Link>
                    </div>
                </div>
            </NavbarContainre>
            <NavbarSpaceHolder></NavbarSpaceHolder>
        </>
    );
};

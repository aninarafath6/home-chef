import { useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
    Container,
    HeaderContainer,
    LogoContainer,
    MenuIconButton,
    LogoText,
    SearchContainer,
    SearchInput,
    SearchIconContainer,
    SearchIcon,
    NavUl,
    NavLi,
    LiContainer,
    CartIconContainer,
    NavLink,
    NavCloseButton
    
} from './Header.Element';
import { Dialog } from '@material-ui/core';

export default function Header() {
    const [status,setStatus] =useState(false)
    const closePannal =()=>{
        setStatus(!status);
    }
    return (
        <Container>
            <HeaderContainer>
                <LogoContainer status={status}>
                    <MenuIconButton onClick={()=>setStatus(!status)} src='/icons/menuIcon.svg' />
                    <LogoText to="/">Home Chef</LogoText>
                </LogoContainer>
                <SearchContainer>
                    <SearchIconContainer>
                        <SearchIcon src='/icons/searchIcon.svg' />
                    </SearchIconContainer>
                    <SearchInput placeholder='Search for food ,coffee ,etc...' />
                </SearchContainer>
               <Dialog open={status}>
               <NavUl>
               <NavCloseButton onClick={()=>setStatus(!status)} src='/icons/menuIcon.svg' />
                <LiContainer>
                <NavLi>
                <NavLink onClick={closePannal} to='/cart'>
                <CartIconContainer>
                    <ShoppingCartIcon/>
                </CartIconContainer>
                </NavLink>
                </NavLi>
                <NavLi>
                <NavLink onClick={closePannal} to='/'>
                    Home
                </NavLink>
                </NavLi>
                <NavLi>
                <NavLink onClick={closePannal} to='/orders'>
                    Orders
                </NavLink>
                </NavLi>
                <NavLi>
                <NavLink onClick={closePannal} to='/offers'>
                    Offers
                </NavLink>
                </NavLi>
                <NavLi>
                <NavLink onClick={closePannal} to='/loginOrSignUp'>
                    Sign in
                </NavLink>
                </NavLi>
                <NavLi>
                <NavLink onClick={closePannal} to='/loginOrSignUp'>
                    Sign Up
                </NavLink>
                </NavLi>
                </LiContainer>
                </NavUl>
               </Dialog>
            </HeaderContainer>
           
        </Container>
    )
}

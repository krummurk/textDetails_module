// import React from 'react';
// import styled from 'styled-components';
const SubSubMenuStyle = {};
SubSubMenuStyle.Container = styled.div`
  display: flex;
  flex-direction: column;
`;

SubSubMenuStyle.Wrapper = styled.section`
  padding: 0.75rem;
  border-bottom: 1px solid #d8d9db;
  margin: 0 0 0.25rem;
`;
const SubMenu = {};
SubMenu.title = styled.h3`
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
`
SubMenu.descrip = styled.div`
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    margin-top: 16px;
    margin-bottom: 16px;
`
SubMenu.block = styled.div`

`

SubSubMenuStyle.Flexrow = styled.div`
  background-color: white;
  display: flex;
`
SubSubMenuStyle.Flexcolumn = styled.div`
  width: ${(props) => props.size / 2 * 100}vw;
  margin-left: 1rem;
  margin-right: 1rem;
`

const Item = {};
Item.row = styled.div`
    justify-content: space-between;
    background-color: white;
    display: flex;
`

Item.column = styled.div`
    align-self: center;
    width: ${(props) => props.size / 2 * 100}vw;

`
Item.description = styled.div`
    border: .2rem solid white;
    font-size: 12px;
    line-height: 20px;
`
Item.name = styled.div`
    border: .2rem solid white;
    font-size: 16px;
    line-height: 20px;
`

Item.price = styled.div`
    font-size: 16px;
`
var SubSubMenu = ({ subsubMenu }) => {
    var leftSide = subsubMenu.items.filter((i, idx) => idx % 2 === 0).map((i, idx) => {
        return (
            <SubMenu.block key={idx.toString()} >
                <Item.row>
                    <Item.column>
                        <Item.name> {i.name} </Item.name>
                    </Item.column>
                    <Item.column >
                        <Item.price> ${i.basePrice} </Item.price>
                    </Item.column>
                </Item.row>
                <Item.row>
                    <Item.description> {i.description} </Item.description>
                </Item.row>
            </SubMenu.block>
        )
    });
    var rightSide = subsubMenu.items.filter((i, idx) => idx % 2 === 1).map((i, idx) => {
        return (
            <SubMenu.block key={(idx + 10).toString()}>
                <Item.row>
                    <Item.column>
                        {i.name}
                    </Item.column>
                    <Item.column >
                        <Item.price> ${i.basePrice} </Item.price>
                    </Item.column>
                </Item.row>
                <Item.row>
                    <Item.description> {i.description} </Item.description>
                </Item.row>
            </SubMenu.block>
        )
    });


    return (
        <SubSubMenuStyle.Container>
            <SubSubMenuStyle.Wrapper>
                <SubSubMenuStyle.Flexrow>
                    <SubMenu.title>{subsubMenu.name}</SubMenu.title>
                </SubSubMenuStyle.Flexrow>
                <SubSubMenuStyle.Flexrow>
                    <SubMenu.descrip>{subsubMenu.description}</SubMenu.descrip>
                </SubSubMenuStyle.Flexrow>
                <SubSubMenuStyle.Flexrow>
                    <SubSubMenuStyle.Flexcolumn size={1}>
                        {leftSide}
                    </SubSubMenuStyle.Flexcolumn>
                    <SubSubMenuStyle.Flexcolumn size={1}>
                        {rightSide}
                    </SubSubMenuStyle.Flexcolumn>
                </SubSubMenuStyle.Flexrow>
            </SubSubMenuStyle.Wrapper>
        </SubSubMenuStyle.Container>
    )
}
export default SubSubMenu;
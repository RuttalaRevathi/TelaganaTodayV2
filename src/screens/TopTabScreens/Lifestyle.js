/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getLifestyleAction from '../../redux/actions/getLifestyleAction';


const LifestyleScreen = ({
    navigation,
    lifestyleData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLifestyleAction('lifestyle'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {lifestyleData?.data}
        navigation = {navigation}
        title = {route.name}
        categoryName ="lifestyle"
        />
    );
};

type Props = {
    lifestyleData: Function,
};
const mapStateToProps = state => ({
    lifestyleData: state.lifestyleReducer?.lifestyleData,
});
const mapDispatchToProps = {
    getLifestyleAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(LifestyleScreen);

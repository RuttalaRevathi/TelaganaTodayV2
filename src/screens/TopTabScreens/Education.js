/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getEducationAction from '../../redux/actions/getEducationAction';


const EducationScreen = ({
    navigation,
    educationData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEducationAction('education-today'));

    }, []);

    return (
        <CategoryUI
        data = {educationData?.data}
        navigation = {navigation}
        title = {route.name}
        categoryName ="education-today"
        />
    );
};

type Props = {
    educationData: Function,
};
const mapStateToProps = state => ({
    educationData: state.educationReducer?.educationData,
});
const mapDispatchToProps = {
    getEducationAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(EducationScreen);

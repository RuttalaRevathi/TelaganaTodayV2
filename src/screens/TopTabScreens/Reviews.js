/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import getReviewsAction from '../../redux/actions/getReviewsAction';


const ReviewsScreen = ({
    navigation,
    reviewsData,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviewsAction('reviews'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {reviewsData?.data}
        navigation = {navigation}
        title = {route.name}
        categoryName ="reviews"
        />
    );
};

type Props = {
    reviewsData: Function,
};
const mapStateToProps = state => ({
    reviewsData: state.reviewsReducer?.reviewsData,
});
const mapDispatchToProps = {
    getReviewsAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsScreen);

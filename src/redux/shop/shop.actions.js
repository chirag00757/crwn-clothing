import ShopActionsTypes from './shop.types';
import {firestore,convertCollectionsSnapShotToMap} from '../../firebase/firebase.utils';
export const fetchCollectionsStart = () => ({
    type:ShopActionsTypes.FETCH_COLLECTIONS_START,
    
});
export const fetchCollectionsSuccess = collectionsMap => ({
    type:ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
});

export const fetchCollectionFailure = errorMessage => ({
    type:ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
    payload:errorMessage

});
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef.get().then(snapshot => {
           const collectionsMap =  convertCollectionsSnapShotToMap(snapshot);
           dispatch(fetchCollectionsSuccess(collectionsMap));
           
        }).catch(error => dispatch(fetchCollectionFailure(error.message)));
    };
};

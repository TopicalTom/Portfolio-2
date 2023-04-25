import { assetsSelector } from '../store/reducers';
import { useSelector } from 'react-redux';

export const useAsset = (name: string) => {
    const { assets } = useSelector(assetsSelector);
    let requestedAsset = assets.find(asset => asset.name === name);

    return requestedAsset;
};
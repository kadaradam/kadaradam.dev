import CircularProgressWithLabel from '@components/CircularProgressWithLabel';
import { LanguageType } from 'src/types';

interface LanguageItemProps {
	item: LanguageType;
}

const LanguageItem = ({ item }: LanguageItemProps) => (
	<CircularProgressWithLabel value={item.value} text={item.name} color={item.color} size={128} />
);

export default LanguageItem;

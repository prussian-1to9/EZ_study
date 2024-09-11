import MBTIOptionGroup from './MBTIOptionGroup';
import optionGroups from './optionGroups.json';

export default function MBTISelect({ value='INTJ', onChange }) {
    const handleChangeAt = (val, position) => {
        const nextValue = value.slice(0, position) + val + value.slice(position + 1);
        onChange(nextValue);
    }

    return (
        <div>
            {optionGroups.map((options, index) => (
                <MBTIOptionGroup
                    key={`${options[0].value}-${options[1].value}`}
                    value={value[index]}
                    options={options}
                    onChange={(val) => handleChangeAt(val, index)}
                />
            ))}
        </div>
    )
}


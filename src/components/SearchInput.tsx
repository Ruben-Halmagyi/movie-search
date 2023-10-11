import React, { useEffect, useState } from 'react';

type Props = {
    onChange: (query: string) => void;
    onSearch: (query: string) => void;
};

export const SearchInput: React.FC<Props> = ({ onChange, onSearch }) => {
    const [query, setQuery] = useState('');
    
    useEffect(() => {
        onChange(query);

        if(query.length >= 3) {
            onSearch(query);
        }
      }, [query]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }
    
    const handleKeyUp = (event: React.KeyboardEvent) => {    
        if (event.key === 'Enter' ) {
            onSearch(query);
        }
    };
    
    return (
        <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        placeholder="Search for movies..."
        />
        );
    };
    
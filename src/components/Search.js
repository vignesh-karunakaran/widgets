import React, {useEffect, useState} from "react";
import axios from "axios";
const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]); 
    useEffect(() => {
        const search = async () => {
          const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
            setResults(data.query.search);                 
        }
        if(term && !results.length) {
            search();
        } else {
            const timeOutId = setTimeout(() => {
                if(term) {
                    search();
                }
            }, 1000);

            return(() => {
                clearTimeout(timeOutId);
            });
        }

    }, [term]);
    
    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a className="ui button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    target="_blank"
                    >Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        )
    });
    
    return (
        <React.Fragment>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input className="input" value={term} onChange={(e) => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </React.Fragment>
    )
}
export default Search;
import { useEffect, useState } from 'react'

export const useSearchHook = (search, data = []) => {
    const [searchResult, setSearchResult] = useState([])

    const isStringMatch = (item, searchLength) => {
        let countryName = item.name.split(' ')
        let index1 = 0
        let isMatch = false
        while (index1 < countryName.length) {
            if (countryName[index1].slice(0, searchLength) == search)
                isMatch = true
            index1++
        }
        if (isMatch)
            return item
    }

    const filterSearch = (data, search) => {
        let searchLength = search.length
        let index = 0
        let searchResult = []
        //console.log('Search Text', search)
        while (index < searchLength) {
            let searchData = data
            searchResult = searchData.filter((item) => {
                return isStringMatch(item, searchLength)
            })
            index++
        }
        return searchResult
    }

    useEffect(() => {
        let result = filterSearch(data, search)
        setSearchResult(result)
    }, [search])

    if (!search)
        return data
    return searchResult
}

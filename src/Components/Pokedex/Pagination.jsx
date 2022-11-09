import React from 'react'
import '../Pokedex/Styles/pagination.css'

const Pagination = ({ page, pagesLength, setPage }) => {

    const pagePerBlock = 8
    const currentBlock = Math.ceil(page / pagePerBlock)
    const BlockLength = Math.ceil(pagesLength / pagePerBlock)

    const arrPages = []
    const initialPage = (currentBlock - 1) * pagePerBlock + 1
    const limitPage = BlockLength === currentBlock ? pagesLength : currentBlock * pagePerBlock

    for (let i = initialPage; i <= limitPage; i++) {
        arrPages.push(i)
    }

    const handlePrev = () => {
        setPage(page - 1)
    }
    const handleNext = () => {
        setPage(page + 1)
    }
    const handlepage = currentPage => {
        setPage(currentPage)
    }
    return (
        <div className='pagination'>
            {
                page > 1 &&
                <div className='pagination__prev pagination__active' onClick={handlePrev}>&#60;</div>
            }
            <ul className='pagination__container'>
                {
                    arrPages.map(e => (
                        <li className={`pagination__page ${page === e && 'pagination__active'}`}
                            onClick={() => handlepage(e)}
                            key={e}>
                            {e}
                        </li>
                    ))
                }
            </ul>
            {
                page < pagesLength &&
                <div className='pagination__next pagination__active' onClick={handleNext}>&#62;</div>
            }
        </div>
    )
}

export default Pagination
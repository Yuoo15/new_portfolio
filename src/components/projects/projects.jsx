import React, { useRef } from 'react'
import Project_pack from '../../module/project_pack/project_pack'
import styles from './projects.module.css'
import image from '../../assets/Structure.png'
import old from '../../assets/old.png'
import hp from '../../assets/ph.png'
import port from '../../assets/port.png'
import array_l from '../../assets/array_l.png'
import array_r from '../../assets/array_r.png'
import ss from '../../assets/ss.jfif'
export default () => {
    const project = [
        {
            id: 1,
            text: 'Онлайн магазин',
            gitt: 'https://github.com/Yuoo15/Online-Shop',
            src: 'https://yuoo15.github.io/Online-Shop/',
            image: image,
            skils: [
                { id: 1, skil: 'React' },
                { id: 3, skil: 'React router', color: '#34D399' },
                { id: 3, skil: 'Vite', color: '#111827' }
            ]
        },
        {
            id: 2,
            text: 'Портфолио',
            gitt: 'https://github.com/Yuoo15/my-portfolio',
            src: 'https://yuoo15.github.io/my-portfolio/',
            image: old,
            skils: [
                { id: 2, skil: 'html' },
                { id: 2, skil: 'js', color: '#F59E0B' },
                { id: 2, skil: 'Scss', color: '#34D399' }
            ]
        },
        {
            id: 3,
            text: 'Шаблон для ДР',
            gitt: 'https://github.com/Yuoo15/Name',
            src: 'https://yuoo15.github.io/Name/',
            image: hp,
            skils: [
                { id: 3, skil: 'React' },
                { id: 3, skil: 'Vite', color: '#111827' }
            ]
        },
        {
            id: 4,
            text: 'Новое портфолио',
            gitt: 'https://github.com/Yuoo15/new_portfolio',
            src: '/',
            image: port,
            skils: [
                { id: 3, skil: 'React' },
                { id: 3, skil: 'Vite', color: '#111827' }
            ]
        },
                {
            id: 5,
            text: 'Школьный проект',
            gitt: 'https://github.com/Yuoo15/school-project-gpt-',
            src: 'https://yuoo15.github.io/school-project-gpt-/',
            image: ss,
            skils: [
                { id: 3, skil: 'React' },
                { id: 3, skil: 'Vite', color: '#111827' },
                { id: 3, skil: 'React router', color: '#34D399' }
            ]
        }
    ]

    const scrollRef = useRef(null)

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
        }
    }

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
        }
    }

    return (
        <>
        <a id='projects'></a>
        <div className={styles.content}>
            <h1 className={styles.h1}>Последние<br /> проекты</h1>
            <div className={styles.project} ref={scrollRef}>
                {project.map(item => (
                    <span key={item.id}>
                        <Project_pack {...item} />
                    </span>
                ))}
            </div>
            <div className={styles.cont}>
                <button onClick={scrollRight} className={styles.button}><img src={array_r} width={25} height={20}/></button>
                <button onClick={scrollLeft} className={styles.button}><img src={array_l} width={25} height={20}/></button>
            </div>
        </div>
        </>
    )
}
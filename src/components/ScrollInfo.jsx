import { useEffect, useState } from "react";

export function ScrollInfo () {
    const [scrollPosition, setScrollPosition] = useState(window.scrollY);

    // Cand se produce eventul de scroll, am sa modific valoarea state-ului

    const listenerOnScroll = function () {
        setScrollPosition(window.scrollY)
    }
    // Daca folosim useEffect cu al doilea paramteru ca un array gol, inseamna ca functia din useEffect va fi triggeruita o singura data
    useEffect(() => {
        // Adaugam event listenerul pe document
        document.addEventListener('scroll', listenerOnScroll);
        // Functia returnata de useEffect va fi executata cand componenta se va demonta 
        // Si atunci sterg event listenerul de pe document
        return () => {
            // Sterg event listenerul de scroll
            document.removeEventListener('scroll', listenerOnScroll);
        }
    }, [])
    return <p>Pozitia scrollului este: {scrollPosition}</p>
}

const container = document.getElementById('container')

function typeWriter (text, speed, div) {
    let i = 0;
    function type() {
        if(i < text.length){
            div.innerHTML += text.charAt(i)
            i++;
            setTimeout(type, speed)
        }
    }
    type()
  }

  
  const wgpArray = []
  const unitsArray = []
  const gpArray = []
  let numberOfCourses = 0;
  let arrayIteration = 0
  let gradePointArrayIteration = 0
  let cumulativeUnits = 0;
  let cumulativeWgp = 0;
  let gpa = 0;
  
const firstElement = document.getElementById('firstInput')

firstElement.addEventListener('keydown', 
    function(event) {

        if(event.key === 'Enter' && event.target.textContent.length !== 0){
            event.preventDefault()
            event.target.removeAttribute('contenteditable')
            var greeting = document.createElement('div')
            greeting.classList = 'flex'
            const greetingSpan = document.createElement('span')
            greetingSpan.textContent = '>'
            const greetingParagraph = document.createElement('p')
            greeting.appendChild(greetingSpan)
            greeting.appendChild(greetingParagraph)
            container.appendChild(greeting)
            typeWriter(" What's up friend, My Name is Brian, what is your name.", 50, greetingParagraph)
            const nextElement = document.createElement('div')
            nextElement.classList = 'flex'
            const span = document.createElement('span')
            span.textContent = '>'
            const paragraph = document.createElement('p')
            paragraph.setAttribute('contenteditable', 'true')
            paragraph.classList = 'input'
            paragraph.id = 'secondInput'
            nextElement.appendChild(span)
            nextElement.appendChild(paragraph)
            container.appendChild(nextElement)
                        document.getElementById('secondInput').addEventListener('keydown', 

    function(event) {
        if(event.key === 'Enter' && event.target.textContent.length !== 0){
            event.preventDefault()
            event.target.removeAttribute('contenteditable')
            var name = document.createElement('div')
            name.classList = 'flex'
            const nameSpan = document.createElement('span')
            nameSpan.textContent = '>'
            const nameParagraph = document.createElement('p')
            name.appendChild(nameSpan)
            name.appendChild(nameParagraph)
            container.appendChild(name)
            typeWriter(`Hello ${event.target.textContent}, how many courses do you offer.`,50, nameParagraph)
            const nextElement = document.createElement('div')
            nextElement.classList = 'flex'
            const span = document.createElement('span')
            span.textContent = '>'
            const paragraph = document.createElement('p')
            paragraph.setAttribute('contenteditable', 'true')
            paragraph.classList = 'input'
            paragraph.id = 'ThirdInput'
            nextElement.appendChild(span)
            nextElement.appendChild(paragraph)
            container.appendChild(nextElement)
            paragraph.addEventListener('keydown', 
                function(event){
                    
                    if(event.key === 'Enter'
                ){
                    if(isNaN(event.target.textContent)) {
                        event.preventDefault()
                        return
                    }
                        event.preventDefault()
                        const textContent = Number(event.target.textContent)
                        numberOfCourses = textContent
                        event.target.removeAttribute('contenteditable')
                        var name = document.createElement('div')
                        name.classList = 'flex'
                        const nameSpan = document.createElement('span')
                        nameSpan.textContent = '>'
                        const nameParagraph = document.createElement('p')
                        name.appendChild(nameSpan)
                        name.appendChild(nameParagraph)
                        container.appendChild(name)
                        typeWriter("Enter course units accordingly",50, nameParagraph)
                        const nextElement = document.createElement('div')
                        nextElement.classList = 'flex'
                        const span = document.createElement('span')
                        span.textContent = '>'
                        const paragraph = document.createElement('p')
                        paragraph.setAttribute('contenteditable', 'true')
                        paragraph.classList = 'input'
                        nextElement.appendChild(span)
                        nextElement.appendChild(paragraph)
                        container.appendChild(nextElement)
                        paragraph.addEventListener('keydown', 
                            function(event) {
                                if(event.key === 'Enter' ){
                                    if(arrayIteration < numberOfCourses){
                                        if(isNaN(event.target.textContent)) {
                                            event.preventDefault()
                                            return
                                        }
                                        event.preventDefault()
                                        unitsArray.push(Number(event.target.textContent))
                                        event.target.textContent = ''
                                        arrayIteration++

                                        if(arrayIteration === numberOfCourses){
                                            const textContent = Number(event.target.textContent)
                                            event.target.textContent = unitsArray[unitsArray.length-1]
                                            numberOfCourses = textContent
                                            event.target.removeAttribute('contenteditable')
                                            var name = document.createElement('div')
                                            name.classList = 'flex'
                                            const nameSpan = document.createElement('span')
                                            nameSpan.textContent = '>'
                                            const nameParagraph = document.createElement('p')
                                            name.appendChild(nameSpan)
                                            name.appendChild(nameParagraph)
                                            container.appendChild(name)
                                            typeWriter("Enter each grade point accordingly",50, nameParagraph)
                                            const nextElement = document.createElement('div')
                                            nextElement.classList = 'flex'
                                            const span = document.createElement('span')
                                            span.textContent = '>'
                                            const paragraph = document.createElement('p')
                                            paragraph.setAttribute('contenteditable', 'true')
                                            paragraph.classList = 'input'
                                            nextElement.appendChild(span)
                                            nextElement.appendChild(paragraph)
                                            container.appendChild(nextElement)
                                            paragraph.addEventListener('keydown', 
                                                function(event){
                                                    if(event.key === 'Enter' ){
                                                        if( gradePointArrayIteration < unitsArray.length){
                                                            if(isNaN(event.target.textContent)) {
                                                                event.preventDefault()
                                                                return
                                                            }
                                                            event.preventDefault()
                                                            gpArray.push(Number(event.target.textContent))
                                                            
                                                            event.target.textContent = ''
                                                            
                                                            gradePointArrayIteration++
                                                            if(gradePointArrayIteration === unitsArray.length){
                                                                    const textContent = Number(event.target.textContent)
                                                                    numberOfCourses = textContent
                                                                    event.target.textContent = gpArray[gpArray.length-1]
                                                                    event.target.removeAttribute('contenteditable')
                                                                    var name = document.createElement('div')
                                                                    name.classList = 'flex'
                                                                    const nameSpan = document.createElement('span')
                                                                    nameSpan.textContent = '>'
                                                                    const nameParagraph = document.createElement('p')
                                                                    name.appendChild(nameSpan)
                                                                    name.appendChild(nameParagraph)
                                                                    container.appendChild(name)
                                                                    for (let i = 0; i < unitsArray.length; i++){
                                                                        wgpArray.push(gpArray[i]*unitsArray[i])
                                                                    }
                                                                    for(let i = 0; i< unitsArray.length; i++){
                                                                        cumulativeUnits+=unitsArray[i]
                                                                    }

                                                                    for(let i = 0; i < wgpArray.length; i++){
                                                                        cumulativeWgp+=wgpArray[i]
                                                                    }

                                                                    gpa+= cumulativeWgp/cumulativeUnits

                                                                    

                                                                    typeWriter(`Your Gpa is ${gpa.toFixed(2)}`,50, nameParagraph)
                                                            }
                                                        }else if(isNaN(event.target.textContent)){
                                                            event.target.textContent = 'This isnt a number'
                                                        }
                                                        
                                                    }
                                                
                                                }
                                            )
                                        }
                                    }else if(isNaN(event.target.textContent)){
                                        event.target.textContent = 'This isnt a number'
                                    }
                                    
                                }
                            }
                        )
                    }
                }
            )
        }
    }
)

        }
    }
)

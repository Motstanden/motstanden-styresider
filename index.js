
document.addEventListener("DOMContentLoaded", async () => {

    // Load the project data from the projectData.json file
    const response = await fetch("projectData.json")    
    const projectData = await response.json()
    const pages = projectData.pages.reverse()           // reverse the order so that the most recent year is first
    
    const pageList = document.querySelector("#page-list")

    // Create a link to each page and add it to the pageList
    pages.forEach((page) => {

        const a = document.createElement("a")
        a.href = page.relativeUrl
        a.textContent = page.year

        const li = document.createElement("li")
        li.appendChild(a)
        pageList.appendChild(li)
    })
})

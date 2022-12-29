const formatThree = (three) => {
    return three.replaceAll('\n','<br>')
    .replaceAll('|   |   |   |','|&emsp;|&emsp;|&emsp;|')
    .replaceAll('|   |   |','|&emsp;|&emsp;|')
    .replaceAll('|   |','|&emsp;|')
}

export default formatThree
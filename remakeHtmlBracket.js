function remakeBracket(value){
    //check in the text (value) where there is [zqnizqnci] and replace by ["zqnizqnci"] don't do it if there is already a " or ' before and if there is a $ 
    let text = value.replace(/(\[)([^\$"]*)(\])/g, '["$2"]');
    

    text = text.replace(/(\["")([^\$"]*)(\\"\"])/g, '["$2"]');



    return text
}

library(dplyr)
library(XML)

args<-commandArgs(TRUE)

parseRecipe <- function(url) {
  doc <- htmlParse(url)
  root <- xmlRoot(doc)
  # ingreds <- root %>% xpathSApply("//span[@itemprop='ingredients']", xmlValue)
  ingreds <- root %>% xpathSApply("//li[@class='checkList__line']//span[@itemprop='ingredients']", xmlValue)
  print(ingreds)
  
  # steps <- root %>% xpathSApply("//li[@class='step']//span[@class='recipe-directions__list--item']", xmlValue)
  steps <- root %>% xpathSApply("//ol[@itemprop='recipeInstructions']//span[@class='recipe-directions__list--item']", xmlValue)
  print(steps)
}

parseRecipe("http://allrecipes.com/recipe/23813/rosemary-chicken-with-orange-maple-glaze/?internalSource=recipe%20hub&referringId=1982&referringContentType=recipe%20hub")
parseRecipe("http://allrecipes.com/recipe/232209/caprese-salad-with-grilled-flank-steak/?internalSource=rotd&referringContentType=home%20page")

parseRecipe(args[1])
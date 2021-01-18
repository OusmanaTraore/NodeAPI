class QuickStart  {
    public static void main(String[] args) {
       for(var loop =1; loop <=3; loop++){
           if(loop % 2 == 0 ){

               
               for (var i = 1 ; i <=20 ; i++){
                   for(var j =1; j<= 20 ; j++){
                       if(i % 2 == 0 && j % 2 == 0 || i % 2 == 1 && j % 2 == 1 ){
                           String x = "X";
                           System.out.print(x);
                           
                        }else if (i % 2 == 1 && j % 2 == 0 || i % 2 == 0 && j % 2 == 1){
                            String o = "O";
                            System.out.print(o);
                            
                        }
                        
                    }
                    System.out.println();
                    
                }
            }else if(loop % 2 == 1 ){
                  for (var i = 1 ; i <=20 ; i++){
                   for(var j =1; j<= 20 ; j++){
                       if(i % 2 == 0 && j % 2 == 0 || i % 2 == 1 && j % 2 == 1 ){
                           String x = "G";
                           System.out.print(x);
                           
                        }else if (i % 2 == 1 && j % 2 == 0 || i % 2 == 0 && j % 2 == 1){
                            String o = "A";
                            System.out.print(o);
                            
                        }
                        
                    }
                    System.out.println();
                    
                }
            }

            

        }

    }
}
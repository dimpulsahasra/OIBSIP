
try:
    weight = float(input("Enter your weight in kg: "))
    height = float(input("Enter your height in meters: "))

    if weight <= 0 or height <= 0:
        print("Error: Weight and height must be positive numbers.")
    else:
        bmi = weight / (height ** 2)
        print("Your BMI is:", round(bmi, 2))

        if bmi < 18.5:
            category = "Underweight"
        elif bmi < 25:
            category = "Normal"
        elif bmi < 30:
            category = "Overweight"
        else:
            category = "Obese"

        print("Category:", category)

except ValueError:
    print("Error: Please enter valid numbers only.")

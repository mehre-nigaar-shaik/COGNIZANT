package com.cognizant.loan.model;

public class Loan {

    private String number;
    private String type;
    private double loan;

    public Loan() {
    }

    public Loan(String number, String type, double loan) {
        this.number = number;
        this.type = type;
        this.loan = loan;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getLoan() {
        return loan;
    }

    public void setLoan(double loan) {
        this.loan = loan;
    }
}
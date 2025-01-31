package com.aplikacja.przyklad1.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



    @Document (collection = "users")
    public class User {
        @Id
        private String id;
        private String name;
        private String email;
        private String tel;


        public User() {

        }

        public User(String name, String email, String tel) {
            this.name = name;
            this.email = email;
            this.tel = tel;
        }

        //Gettery
        public String getId() {
            return id;
        }

        public String getName() {
            return name;
        }

        public String getEmail() {
            return email;
        }
        public String getTel() {
            return tel;
        }

        //Settery
        public void setId(String id) {
            this.id = id;
        }

        public void setName(String name) {
            this.name = name;
        }

        public void setEmail(String email) {
            this.email = email;
        }
        public void setTel(String tel) {
            this.tel = tel;
        }
    }




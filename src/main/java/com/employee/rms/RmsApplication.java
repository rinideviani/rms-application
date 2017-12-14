package com.employee.rms;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.WebMvcRegistrationsAdapter;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.mvc.condition.PatternsRequestCondition;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;
import org.springframework.web.servlet.mvc.method.RequestMappingInfo;
//import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import java.lang.reflect.Method;

@SpringBootApplication
public class RmsApplication {
	
	/*  @Value("${rest.api.base.path}")
	    private String restApiBasePath;*/


	public static void main(String[] args) {
		SpringApplication.run(RmsApplication.class, args);
	}
	
	@Bean 
	public WebMvcConfigurer corsConfigurer() {
	    return new WebMvcConfigurerAdapter() {
	        @Override
	        public void addCorsMappings(CorsRegistry registry) {
	            registry.addMapping("/api/**").allowedOrigins("http://localhost:8000");
	        }
	    };
	}
	
	 /*@Override
	  public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
	    registry.addHandler(publisher, webSocketPath).setAllowedOrigins("*");
	  }*/
	
	 /*  @Bean
	    public WebMvcConfigurer corsConfigurer() {
	        return new WebMvcConfigurerAdapter() {
	            @Override
	            public void addCorsMappings(CorsRegistry registry) {
	                registry.addMapping("/**").allowedMethods("*").allowedOrigins("http://localhost:8000/employees");
	            }
	        };
	    }  
	   */

	  /*  @Bean
	    public WebMvcRegistrationsAdapter webMvcRegistrationsHandlerMapping() {
	    	RmsApplication application = this;
	        return new WebMvcRegistrationsAdapter() {
	            @Override
	            public RequestMappingHandlerMapping getRequestMappingHandlerMapping() {
	                return new RequestMappingHandlerMapping() {

	                    @Override
	                    protected void registerHandlerMethod(Object handler, Method method, RequestMappingInfo mapping) {
	                        Class<?> beanType = method.getDeclaringClass();
	                        RestController restApiController = beanType.getAnnotation(RestController.class);
	                        if (restApiController != null) {
	                            PatternsRequestCondition apiPattern = new PatternsRequestCondition(application.restApiBasePath)
	                                    .combine(mapping.getPatternsCondition());

	                            mapping = new RequestMappingInfo(mapping.getName(), apiPattern,
	                                    mapping.getMethodsCondition(), mapping.getParamsCondition(),
	                                    mapping.getHeadersCondition(), mapping.getConsumesCondition(),
	                                    mapping.getProducesCondition(), mapping.getCustomCondition());
	                        }

	                        super.registerHandlerMethod(handler, method, mapping);
	                    }
	                };
	            }
	        };
	    }*/
}
